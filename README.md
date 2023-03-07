## **DATETIME FORMATTER**

This simple package comprises of 2 properties and 3 methods namely:

### **PROPERTIES**
___
1.  DAYS OF THE WEEK
```js
const DAYS = [ 
    "Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", 
    "Saturday"
]
```

2. MONTHS OF THE YEAR
```js
const MONTHS = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
]
```
### **METHODS**
___
1. **dateTimeForHumans**: This method takes a timestamp (in milli-seconds) as an argument and returns an object of the following:\
* year: **e.g -> 2023**,  
* month: **e.g -> January**,  
* dayOfMonth: **e.g -> 10**,  
* day: **e.g -> Wednesday**,  
* time: **e.g -> 9:34 am, 12 noon, 7:45 pm**
___
```ts
type DateTimeForHumansType = {
    year:()=>number,
    month:()=>typeof MONTHS[number],
    dayOfMonth:()=>number,
    day:()=>typeof DAYS[number],
    time:()=>string
}

function dateTimeForHumans(timeStamp:MilliSeconds):DateTimeForHumansType
```

   2.  **fullDate**: This method takes in a timestamp of the DateTimeForHumansType and returns a formatted date string **e.g -> 2 March 2023**

```ts
function fullDate(timestamp:DateTimeForHumansType):string
```

3.  **dateFormat**: This method takes in a timestamp in milli-seconds and returns one of the following:
*   **Today** : If the timestamp was created on the current day
*   **Yesterday**: If the timestamp was created the day before
*   **Days of the Week**: If the timestamp was created in the last **SIX(6)** days **e.g -> Wednesday**.
*   **FullDate**: If the timestamp was created more than a week ago **e.g -> 2 March 2023**

```ts
function dateFormat(timestamp:MilliSeconds)
```

## **...THANK YOU...**