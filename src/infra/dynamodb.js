import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
//const docClient = DynamoDBDocumentClient.from(client);

const tableName = "assets";

const dbHandler = async (data) => {
    dynamo.send(
        new PutCommand({
          TableName: tableName,
          Item: {
            id: requestJSON.id,
            price: requestJSON.price,
            name: requestJSON.name,
          },
        })
      ).then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
}