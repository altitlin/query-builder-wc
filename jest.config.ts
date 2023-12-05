import { type Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts}', '!**/node_modules/**'],
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testRegex: '.*\\.spec\\.tsx?$',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
  },
  transform: {
    '\\.(ts)$': '<rootDir>/node_modules/ts-jest',
  },
}

export default config
