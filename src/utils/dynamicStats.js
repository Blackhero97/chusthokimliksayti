// Dynamic Statistics Utility
// Real-time data simulation for smart city statistics

export const generateDynamicStats = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );

  // Base values with realistic variations
  const baseStats = {
    // HomePage statistics
    citizens: 125000,
    services: 45,
    sensors: 280,
    efficiency: 95,

    // StatisticsPage detailed stats
    wasteVehicles: 20,
    dailyRoutes: 45,
    wasteCollected: 1250,
    wasteEfficiency: 98,

    temperatureSensors: 50,
    schools: 15,
    kindergartens: 12,
    dailyChecks: 150,

    buses: 35,
    dailyPassengers: 8500,
    routes: 12,
    punctuality: 94,

    greenArea: 120,
    moistureSensors: 45,
    waterSaving: 35,
    autoIrrigation: "24/7",

    monthlyCalls: 1200,
    solvedProblems: 95,
    responseTime: "2 soat",
    satisfaction: 92,
  };

  // Time-based variations
  const timeVariations = {
    // Peak hours affect different systems
    rush: (hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 19),
    night: hour >= 22 || hour <= 6,
    workday: now.getDay() >= 1 && now.getDay() <= 5,
  };

  // Calculate dynamic values
  const dynamicStats = {
    // HomePage stats with small variations
    citizens: baseStats.citizens + Math.floor(Math.sin(dayOfYear / 10) * 500),
    services: baseStats.services + (timeVariations.workday ? 2 : 0),
    sensors: baseStats.sensors + Math.floor(Math.sin(hour / 2) * 5),
    efficiency: Math.max(
      90,
      baseStats.efficiency + Math.floor(Math.sin(minute / 10) * 3)
    ),

    // Waste management - varies by day and time
    wasteVehicles: baseStats.wasteVehicles + (timeVariations.rush ? 2 : 0),
    dailyRoutes: baseStats.dailyRoutes + Math.floor(Math.sin(hour / 3) * 3),
    wasteCollected: Math.floor(
      baseStats.wasteCollected + Math.sin(dayOfYear / 7) * 100
    ),
    wasteEfficiency: Math.max(
      95,
      baseStats.wasteEfficiency + Math.floor(Math.sin(minute / 15) * 2)
    ),

    // Temperature monitoring
    temperatureSensors:
      baseStats.temperatureSensors + Math.floor(Math.sin(hour / 4) * 2),
    schools: baseStats.schools,
    kindergartens: baseStats.kindergartens,
    dailyChecks: Math.floor(baseStats.dailyChecks + Math.sin(hour / 2) * 20),

    // Public transport - heavily affected by rush hours
    buses:
      baseStats.buses +
      (timeVariations.rush ? 5 : timeVariations.night ? -3 : 0),
    dailyPassengers: Math.floor(
      baseStats.dailyPassengers +
        (timeVariations.rush ? 2000 : timeVariations.night ? -3000 : 0)
    ),
    routes: baseStats.routes + (timeVariations.rush ? 2 : 0),
    punctuality: Math.max(
      85,
      baseStats.punctuality -
        (timeVariations.rush ? 5 : 0) +
        Math.floor(Math.sin(minute / 20) * 3)
    ),

    // Green areas
    greenArea: baseStats.greenArea,
    moistureSensors:
      baseStats.moistureSensors + Math.floor(Math.sin(hour / 6) * 2),
    waterSaving: Math.max(
      25,
      baseStats.waterSaving + Math.floor(Math.sin(dayOfYear / 5) * 8)
    ),
    autoIrrigation: baseStats.autoIrrigation,

    // Citizen services - varies by work hours
    monthlyCalls: Math.floor(
      baseStats.monthlyCalls + (timeVariations.workday ? 100 : -50)
    ),
    solvedProblems: Math.max(
      88,
      baseStats.solvedProblems + Math.floor(Math.sin(minute / 25) * 4)
    ),
    responseTime: timeVariations.rush ? "3 soat" : baseStats.responseTime,
    satisfaction: Math.max(
      85,
      baseStats.satisfaction + Math.floor(Math.sin(hour / 8) * 5)
    ),
  };

  return dynamicStats;
};

// Format numbers with appropriate suffixes
export const formatStatValue = (value, type = "number") => {
  if (typeof value === "string") return value;

  switch (type) {
    case "large":
      if (value >= 1000) {
        return `${Math.floor(value / 100) / 10}k+`;
      }
      return `${value}+`;

    case "percentage":
      return `${value}%`;

    case "plus":
      return `${value}+`;

    default:
      return value.toString();
  }
};

// Update interval for real-time updates (in milliseconds)
export const UPDATE_INTERVAL = 30000; // 30 seconds

// Get current time display
export const getCurrentTime = () => {
  return new Date().toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Get current temperature (simulated)
export const getCurrentTemperature = () => {
  const hour = new Date().getHours();
  const season = Math.floor((new Date().getMonth() + 1) / 3); // 0-3 for seasons

  let baseTemp;
  switch (season) {
    case 0:
      baseTemp = 5;
      break; // Winter
    case 1:
      baseTemp = 18;
      break; // Spring
    case 2:
      baseTemp = 30;
      break; // Summer
    case 3:
      baseTemp = 15;
      break; // Autumn
    default:
      baseTemp = 20;
  }

  // Daily temperature variation
  const dailyVariation = Math.sin(((hour - 6) / 12) * Math.PI) * 8;
  const randomVariation = (Math.random() - 0.5) * 4;

  return Math.round(baseTemp + dailyVariation + randomVariation);
};
