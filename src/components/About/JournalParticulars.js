const particulars = [
  { Title: "Online Indian Journal of Peace and Conflict Resolution(OIJPCR)" },
  { Frequency: "Annual" },
  { Publisher: "Dr.Jyoti M. Pathania" },
  { "Chief Editor": "Dr.Jyoti M. Pathania" },
  {
    Copyright:
      "Online Indian Journal of Peace and Conflict Resolution, Sector 37, Noida, UP",
  },
  { "Starting Year": 2016 },
  { Subjects: "Social sciences" },
  { Language: "English" },
  { "Publication Format": "Online" },
  { "Phone No": "+91 7042660900" },
  { "Email Id": "contact.us@oijpcr.org" },
  { Website: "https://oijpcr.org" },
  { Address: "Sector-37, Noida, UP, India - 201303" },
];

const JournalParticularsContainer = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ fieldName, value }) => {
  return (
    <tr className="border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {fieldName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {value}
      </td>
    </tr>
  );
};

const JournalParticulars = () => (
  <JournalParticularsContainer>
    <table className="min-w-full">
      <tbody>
        {particulars.map((particular, index) => {
          const fieldName = Object.keys(particular);
          const value = particular[fieldName];

          return <TableRow key={index} fieldName={fieldName} value={value} />;
        })}
      </tbody>
    </table>
  </JournalParticularsContainer>
);

export default JournalParticulars;
