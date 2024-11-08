/*
  Warnings:

  - You are about to drop the column `celular` on the `Contacto` table. All the data in the column will be lost.
  - Added the required column `contenido` to the `Contacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contacto" DROP COLUMN "celular",
ADD COLUMN     "contenido" VARCHAR(255) NOT NULL;
