# congress-market-activity-be

## **In Progress ReadMe:**

[Deployed on AWS Beanstalk](http://congress-market-activity.eba-jgcutjhi.us-east-2.elasticbeanstalk.com/)

[Data Gathered using program in this Repo](https://github.com/g3or3/congress-market-activity-db)

---

Congress Market Activity back end set up to support client operations to retrieve and view data from the Office of the Clerk, U.S. House of Representatives. 
Currently supports the ability to retrieve the list of congress people that have transacted in the market from the year 2017-forward as well as the transaction
details that were scraped directly from the Transaction Reports downloaded from: [Office of the Clerk](https://disclosures-clerk.house.gov/PublicDisclosure/FinancialDisclosure)

### Current Working Endpoints 

- `/api/person`

Retrieves the list of congress people from the database. Optional page and limit can be passed as query params to support pagination.

*localhost:8000/api/person?page=1&limit=10* 

<br />

- `/api/person/:person_id`

Retrieves the list of document ids and date associated with that particular person id.

*localhost:8000/api/person/7*

<br />

- `/api/record`

Retrieves the list of transactions grouped by document id with the optional *year and limit* query param to specify the year and limit of records to return.

*localhost:8000/api/record?year=2020&limit=75*

<br />

- `/api/record/:doc_id`

Retrieve a specific list of transactions that pertain to that specific record id.

*localhost:8000/api/record/20017924*

<br />

#### Example Response:

```
{
  "doc_id": "20017967",
  "first_name": "Virginia",
  "last_name": "Foxx",
  "url": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/20017967.pdf",
  "transactions": 
  [
    {
      "ticker": "MO",
      "company": "ALTRIA GROUP, INC.",
      "asset": "Stocks (including ADRs)",
      "type": "P",
      "date": "12/29/2020",
      "amount_range": "$1,001 - $15,000 ",
      "description": null
    }
  ]
}
```
