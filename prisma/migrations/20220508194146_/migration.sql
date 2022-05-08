/*
  Warnings:

  - Added the required column `ownerId` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
/* AlterTable - Add ownerId as an optional column */
ALTER TABLE "Home" ADD COLUMN "ownerId" TEXT;

/* UpdateData - Add default owner value to existing homes */
UPDATE "Home" SET "ownerId" = 'cl2xossji00209jc9q2tdk7th' WHERE "ownerId" IS NULL;

ALTER TABLE "Home" ALTER COLUMN "ownerId" SET NOT NULL;

ALTER TABLE "Home" ADD CONSTRAINT "Home_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
