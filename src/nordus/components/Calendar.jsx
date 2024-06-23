import DatePicker from "react-native-modern-datepicker";
import moment from "moment";

export default function Calendar({ setData }) {
  const today = moment();
  const minimumDate = today.format("YYYY-MM-DD");

  const futureDate = moment(today).add(30, "days");
  const maximumDate = futureDate.format("YYYY-MM-DD");

  function handleDate(dataSelecionada) {
    const data = moment(dataSelecionada, "YYYY/MM/DD").toDate();

    setData(data);
    console.log(data);
  }

  return (
    <DatePicker
      mode="calendar"
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      style={{ borderRadius: 20 }}
      onDateChange={handleDate}
      onDisabledDayError={() => console.log("hey")}
      options={{
        backgroundColor: "#353535",
        textHeaderColor: "#fff",
        textDefaultColor: "#fff",
        selectedTextColor: "#fff",
        mainColor: "#EA714C",
        textSecondaryColor: "#909090",
        borderColor: "rgba(122, 146, 165, 0.1)",
      }}
    />
  );
}
