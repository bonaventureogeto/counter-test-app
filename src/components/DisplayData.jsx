const DisplayData = () => {

    const data = [
        {
            id: 0,
            language: "English",
            nationality: "Kenyan",
            name: "Jane Doe"
        },
        {
            id: 1,
            language: "Swahili",
            nationality: "Ugandan",
            name: "Jane Mu7"
        },
        {
            id: 2,
            language: "French",
            nationality: "Cameroon",
            name: "Jude Doe"
        }
    ]

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className="bg-gray-600">
                            <h2 className="text-2xl">{item.language}</h2>
                            <h2 className="text-xl">{item.nationality}</h2>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayData;