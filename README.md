# Online Fitness Personal Trainer Search 🏋️
![PT](https://user-images.githubusercontent.com/89810118/211116550-e89dab98-97de-4165-b6f8-e2a457931b0a.png)

# Trainers near you! 👀

Simple interface for people to look search for personal trainers nearby that are avaliable for hiring.. level up your fitness with this application 💪🔍

### Built Using

* [JavaScript](https://www.javascript.com/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://web.dev/learn/css/)
* [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [RandomUSERApi](https://randomuser.me/)

## API Reference
https://randomuser.me/
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

