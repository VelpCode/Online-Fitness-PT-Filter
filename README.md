# Online-Fitness-PT-Filter
![PT](https://user-images.githubusercontent.com/89810118/211116550-e89dab98-97de-4165-b6f8-e2a457931b0a.png)

# Online Fitness PT Search

This application is for individuals that are looking for an Online personal trainer
that is currently live & ready to help..

## API Reference

#### Get all items



```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

