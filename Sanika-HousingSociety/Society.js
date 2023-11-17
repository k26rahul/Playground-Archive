export class Society {
  members = [];

  expenses = {
    ElectricityBill: 0,
    WaterBill: 0,
    Security: 0,
    Cleaning: 0,
    GeneratorMaintenance: 0,
    CAConsultation: 0,
    Gardening: 0,
    DieselExpenses: 0,
    OfficeSupplies: 0,
    InternetBill: 0,
    Insurance: 0,
    Advertising: 0,
    TravelExpenses: 0,
    Stationery: 0,
    Repairs: 0,
    SoftwareSubscriptions: 0,
    ProfessionalFees: 0,
    Training: 0,
    Marketing: 0,
  };
  maintenance = {};

  addMember(member) {
    this.members.push(member);
    this.maintenance[member.flatNumber] = 0;
    member.society = this;
  }

  addExpense(expenseName, amount) {
    this.expenses[expenseName] += amount;
  }

  addMaintenance(flatNumber, amount) {
    this.maintenance[flatNumber] += amount;
  }
}

export class Member {
  society = null;

  constructor(name, flatNumber) {
    this.name = name;
    this.flatNumber = flatNumber;
  }

  addExpense(expenseName, amount) {
    this.expenses[expenseName] += amount;
  }

  addMaintenance(flatNumber, amount) {
    this.maintenance[flatNumber] += amount;
  }
}
