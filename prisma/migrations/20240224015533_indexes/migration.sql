-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "ix_languages_id" ON "languages"("id");

-- CreateIndex
CREATE INDEX "ix_snippets_id" ON "snippets"("id");

-- CreateIndex
CREATE INDEX "ix_users_id" ON "users"("id");
