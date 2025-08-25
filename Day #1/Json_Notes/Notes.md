# JSON Learning Notes

## 1. JSON Kya Hai?
- **JSON** (JavaScript Object Notation) aik halka phulka data exchange format hai.
- Insan asani se parh sakta hai, machine bhi asani se samajh leti hai.
- Har programming language me istemal hota hai, zyada tar APIs aur config files me use hota hai.

## 2. JSON Ki Basic Syntax
- Data hamesha **name/value** pair me hota hai: `"name": "value"`
- Har pair comma se alag hota hai.
- Curly braces `{}` ka matlab object hai.
- Square brackets `[]` ka matlab array hai.
- Value ye ho sakti hai: string, number, object, array, boolean, ya null.

```json
{
    "name": "Ali",
    "age": 25,
    "skills": ["JavaScript", "PHP"],
    "isActive": true,
    "address": null
}
```

## 3. JSON vs JavaScript Object
- JSON me keys aur strings hamesha double quotes `"` me likhni hoti hain.
- JSON me function ya comments nahi likh sakte.

## 4. Valid Data Types
- **String:** `"text"`
- **Number:** `123`, `12.34`
- **Object:** `{ "key": "value" }`
- **Array:** `[1, 2, 3]`
- **Boolean:** `true`, `false`
- **Null:** `null`

## 5. Parsing aur Stringify Karna
- **Parse:** JSON string ko object me tabdeel karna.
    - JavaScript: `JSON.parse(jsonString)`
- **Stringify:** Object ko JSON string me tabdeel karna.
    - JavaScript: `JSON.stringify(object)`

## 6. Best Practices
- Hamesha JSON ko validate karo (online tools use karo).
- Structure ko consistent rakho.
- Bohat zyada nested objects se bacho, readability kharab hoti hai.
- Key names meaningful rakho.

## 7. Advanced Concepts
- **Nested Objects & Arrays:**
    ```json
    {
        "user": {
            "id": 1,
            "profile": {
                "email": "ali@example.com"
            }
        }
    }
    ```
- **APIs:** REST APIs me JSON standard format hai.
- **Schema Validation:** JSON Schema se structure define aur validate kar sakte ho.

## 8. Common Errors
- Trailing commas lagana (aakhri comma nahi hona chahiye).
- Single quotes use karna (hamesha double quotes use karo).
- Special characters ko escape na karna.

---
