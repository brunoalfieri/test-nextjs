/*
  Warnings:

  - You are about to drop the column `createAt` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `ProductsCategory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductsCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("categoryId", "description", "id", "image", "name", "price", "updatedAt") SELECT "categoryId", "description", "id", "image", "name", "price", "updatedAt" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE TABLE "new_ProductsCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ProductsCategory" ("id", "name", "updatedAt") SELECT "id", "name", "updatedAt" FROM "ProductsCategory";
DROP TABLE "ProductsCategory";
ALTER TABLE "new_ProductsCategory" RENAME TO "ProductsCategory";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
