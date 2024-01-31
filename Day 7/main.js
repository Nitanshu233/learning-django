let marks = [
    {
        "name":"Nitnshu",
        "marks": {
            "English":10,
            "Maths":20,
            "science":false
        }
    },
    {
        "name":"Kevin",
        "marks": {
            "English":20,
            "Maths":30,
            "science":false
        }
    },
    {
        "name":"Jaimin",
        "marks": {
            "English":40,
            "Maths":10,
            "science":false
        }
    },
    {
        "name":"Margesh",
        "marks": {
            "English":10,
            "Maths":20,
            "science":false
        }
    }
]


marks.map((m)=>{
    console.log("------------------------")
    console.log(m.name,"\t\nEnglish : ", m.marks.English,"\t\nMaths   : ",m.marks.Maths,"\t\nScience : ",m.marks.science)
    console.log("------------------------")
}
)

console.log("------------------------")