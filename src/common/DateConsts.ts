/**
 * DateConsts
 *
 * Useful constants for time and date conversions.
 *
 */

export type Meridiem = 'AM' | 'PM';

export const MS_PER_SEC = 1000;
export const SEC_PER_MIN = 60;
export const MIN_PER_HOUR = 60;
export const HOUR_PER_DAY = 24;
export const DAYS_PER_WEEK = 7;
export const MONTHS_PER_YEAR = 12;
export const US_PER_MS = 1000; // microseconds in a millisecond

export const SEC_PER_HOUR = SEC_PER_MIN * MIN_PER_HOUR;
export const SEC_PER_DAY = SEC_PER_HOUR * HOUR_PER_DAY;
export const SEC_PER_WEEK = SEC_PER_DAY * DAYS_PER_WEEK;

export const MS_PER_MIN = MS_PER_SEC * SEC_PER_MIN;
export const MS_PER_HOUR = MS_PER_MIN * MIN_PER_HOUR;
export const MS_PER_DAY = MS_PER_SEC * SEC_PER_DAY;
export const MS_PER_WEEK = MS_PER_DAY * DAYS_PER_WEEK;

/**
 * Returns the number of days for the specified month, given a 4-digit year.
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

/**
 * Returns the number of seconds in current Date.now()
 */
export const getCurrentTimeInSeconds = (): number => {
  return Date.now() / MS_PER_SEC;
};

/**
 * @param millis - milliseconds
 */
export const roundToNearestSecond = (millis: number) =>
  Math.round(millis / MS_PER_SEC) * MS_PER_SEC;
