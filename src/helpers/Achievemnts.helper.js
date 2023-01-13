import { Alert } from "react-native";

export const getLogoRouter = (achievementdata) => {
  if (achievementdata < 1) return 0;
  else if (achievementdata < 10) return 1;
  else if (achievementdata < 50) return 2;
  else if (achievementdata < 100) return 3;
  else if (achievementdata < 1000) return 4;
  else if (achievementdata >= 1000) return 5;
};
export const getLogoTreedom = (achievementdata) => {
  if (achievementdata < 1) return 0;
  else if (achievementdata < 5) return 1;
  else if (achievementdata < 10) return 2;
  else if (achievementdata < 25) return 3;
  else if (achievementdata < 100) return 4;
  else if (achievementdata >= 100) return 5;
};
export const getLogoCO2 = (achievementdata) => {
  if (achievementdata < 20) return 0;
  else if (achievementdata < 1000) return 1;
  else if (achievementdata < 2000) return 2;
  else if (achievementdata < 20000) return 3;
  else if (achievementdata < 200000) return 4;
  else if (achievementdata >= 200000) return 5;
};
export const getLogoCritic = (achievementdata) => {
  if (achievementdata < 1) return 0;
  else if (achievementdata < 5) return 1;
  else if (achievementdata < 10) return 2;
  else if (achievementdata < 25) return 3;
  else if (achievementdata < 100) return 4;
  else if (achievementdata >= 100) return 5;
};
export const getLogoCarNomad = (achievementdata) => {
  if (achievementdata < 10) return 0;
  else if (achievementdata < 500) return 1;
  else if (achievementdata < 1000) return 2;
  else if (achievementdata < 10000) return 3;
  else if (achievementdata < 100000) return 4;
  else if (achievementdata >= 100000) return 5;
};
export const getLogoBikeNomand = (achievementdata) => {
  if (achievementdata < 5) return 0;
  else if (achievementdata < 50) return 1;
  else if (achievementdata < 100) return 2;
  else if (achievementdata < 1000) return 3;
  else if (achievementdata < 10000) return 4;
  else if (achievementdata >= 10000) return 5;
};
export const getLogoFavoritism = (achievementdata) => {
  if (achievementdata < 1) return 0;
  else if (achievementdata < 5) return 1;
  else if (achievementdata < 10) return 2;
  else if (achievementdata < 25) return 3;
  else if (achievementdata < 100) return 4;
  else if (achievementdata >= 100) return 5;
};

export const getNextGoalRouter = (achievementdata) => {
  if (achievementdata < 1) return 1;
  else if (achievementdata < 10) return 10;
  else if (achievementdata < 50) return 50;
  else if (achievementdata < 100) return 100;
  else if (achievementdata < 1000) return 1000;
  else if (achievementdata >= 1000) return 0;
};
export const getNextGoalTreedom = (achievementdata) => {
  if (achievementdata < 1) return 1;
  else if (achievementdata < 5) return 5;
  else if (achievementdata < 10) return 10;
  else if (achievementdata < 25) return 25;
  else if (achievementdata < 100) return 100;
  else if (achievementdata >= 100) return 0;
};
export const getNextGoalCO2 = (achievementdata) => {
  if (achievementdata < 20) return 20;
  else if (achievementdata < 1000) return 1000;
  else if (achievementdata < 2000) return 2000;
  else if (achievementdata < 20000) return 20000;
  else if (achievementdata < 200000) return 200000;
  else if (achievementdata >= 200000) return 0;
};
export const getNextGoalCritic = (achievementdata) => {
  if (achievementdata < 1) return 1;
  else if (achievementdata < 5) return 5;
  else if (achievementdata < 10) return 10;
  else if (achievementdata < 25) return 25;
  else if (achievementdata < 100) return 100;
  else if (achievementdata >= 100) return 0;
};
export const getNextGoalCarNomad = (achievementdata) => {
  if (achievementdata < 10) return 10;
  else if (achievementdata < 500) return 500;
  else if (achievementdata < 1000) return 1000;
  else if (achievementdata < 10000) return 10000;
  else if (achievementdata < 100000) return 100000;
  else if (achievementdata >= 100000) return 0;
};
export const getNextGoalBikeNomand = (achievementdata) => {
  if (achievementdata < 5) return 5;
  else if (achievementdata < 50) return 50;
  else if (achievementdata < 100) return 100;
  else if (achievementdata < 1000) return 1000;
  else if (achievementdata < 10000) return 10000;
  else if (achievementdata >= 10000) return 0;
};
export const getNextGoalFavoritism = (achievementdata) => {
  if (achievementdata < 1) return 1;
  else if (achievementdata < 5) return 5;
  else if (achievementdata < 10) return 10;
  else if (achievementdata < 25) return 25;
  else if (achievementdata < 100) return 100;
  else if (achievementdata >= 100) return 0;
};
