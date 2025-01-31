FROM node:22 AS docker-dependencies


WORKDIR /app

COPY ./package-lock.json .
COPY ./package.json .

RUN npm install

FROM node:22 AS docker-builder
ARG DATABASE_URL=${DATABASE_URL}
ARG NEXT_PUBLIC_API_ENDPOINT=${NEXT_PUBLIC_API_ENDPOINT}

WORKDIR /app

COPY . .

RUN npx prisma generate
RUN npx prisma migrate deploy

RUN npm run build

FROM node:22 AS docker-runner
ARG DATABASE_PATH=${DATABASE_PATH}
WORKDIR /app


COPY --from=docker-builder /app/node_modules ./node_modules
COPY --from=docker-builder /app/public ./public
COPY --from=docker-builder /app/.next ./.next
COPY --from=docker-builder /app/package-lock.json .
COPY --from=docker-builder /app/package.json .
COPY --from=docker-builder /app/next.config.ts .
COPY --from=docker-builder ${DATABASE_PATH} .

CMD ["npm run start"]