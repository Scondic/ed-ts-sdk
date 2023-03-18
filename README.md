# EasyDonate TypeScript SDK

EasyDonate TypeScript SDK — это TypeScript-библиотека для взаимодействия с API EasyDonate

## Установка

### Пакетный менеджер

Использование npm:

```bash
$ npm install @scondic/easydonate-sdk
```

Использование yarn:

```bash
$ yarn add @scondic/easydonate-sdk
```

Использование pnpm:

```bash
$ pnpm add @scondic/easydonate-sdk
```

```typescript
const client = new EasyDonateApiClient('0cbed40c0d920b94126eaf5e707be1f5');

// Получение данных о серверах
client.getAllServers().then((data) => console.log('servers ', data));
```
