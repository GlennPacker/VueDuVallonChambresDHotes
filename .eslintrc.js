module.exports = {
  extends: [
    "next/core-web-vitals",
    "next/typescript"
  ],
  rules: {
    "@next/next/no-img-element": "off",
    "react/no-unescaped-entities": "off",
    "react-hooks/exhaustive-deps": "off"
  }
}