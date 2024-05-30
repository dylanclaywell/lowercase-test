import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",

    // This resolves issues with the test runner not finding the test files due to lowercase drive letters in the path (e.g. C:\ vs c:\)
    // However, this does not seem to fix the issue when mocking modules
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
})
