export const COLUMNS = [
    {
        Header: "№",
        accessor: "id",
    },
    {
        Header: "Неблагоприятный фактор",
        accessor: "causeOfFactor.title",
    },
    {
        Header: "Субъекты/Ассоциация субъектов предпринимательства, на которую влияет неблагоприятный фактор",
        accessor: "fullname",
    },
    {

        Header: "Отрасль экономической деятельности",
        accessor: "economicActivity.title",
    },
    {
        Header: "Область (г. Бишкек/Ош)",
        accessor: "region.title",
    },
    {
        Header: "Ответственный государственный орган",
        accessor: "organ.title",
    },
    {
        Header: "Статус решения Неблагоприятного фактора",
        accessor: "status.title",
    },
];