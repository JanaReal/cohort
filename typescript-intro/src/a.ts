type Employee = {
    name:String,
    startDate: Date,
}

interface Manager {
    name:string,
    department: string,
}

type TechLead = Employee & Manager;

let teamLead: TechLead = {
    name:"harkl",
    startDate:new Date(),
    department: "SDE"
} 


