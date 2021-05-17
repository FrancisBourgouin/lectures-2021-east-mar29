const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
    appointments: [1, 2, 3]
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
    appointments: []
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 4,
    appointments: [4]
  }
];
const appointments = {
  1: {
    id: 1,
    time: "1pm",
    interview: {
      student: "Bob",
      interviewer: 1
    }
  },
  2: {
    id: 2,
    time: "2pm",
    interview: null
  },
  3: {
    id: 3,
    time: "3pm",
    interview: null
  },
  4: {
    id: 4,
    time: "4pm",
    interview: null
  }
}
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const state = {
  day: 'Monday',
  days,
  appointments,
  interviewers
}

// Find the number of free spots for a given day
const givenDay = state.day // 'Monday'
const dayToUpdate = state.days.find(day => day.name === givenDay)
const dayToUpdateIndex = state.days.findIndex(day => day.name === givenDay)
const listOfAppointmentIds = dayToUpdate.appointments // [1,2,3]
const spots = listOfAppointmentIds.filter(apptId => state.appointments[apptId].interview === null).length


const updatedDay = { ...dayToUpdate, spots }
const updatedDays = [...state.days]
updatedDays[dayToUpdateIndex] = updatedDay

// return {...state, days:updatedDays}





















const newState = { ...state, days }
const newnewState = updateSpots(newState)
setState(newnewState)

// Big version
const updateSpots = (incomingState) => {
  // Spread what is necessary
  const state = { ...incomingState }
  const days = [...state.days]
  const day = { ...days.find(day => day.name === state.day) }

  // Prepare what is necessary
  const dayIndex = days.findIndex(day => day.name === state.day)
  const freeSpots = day.appointments.filter(apptId => appointments[apptId] === null).length

  // Fancy pants reducer
  // const {day, index} = days.reduce((acc, day, index) => {
  //   if(day.name === state.day){
  //     acc.day = day
  //     acc.index = index
  //   }
  // },{})
  // Assemble the new state
  day.spots = freeSpots
  days[dayIndex] = day

  // Return the new state
  return state
}

// Smaller version
const updateSpotsButSmaller = (incomingState) => {

}