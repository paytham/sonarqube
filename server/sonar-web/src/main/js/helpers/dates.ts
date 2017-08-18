/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

const MILLISECONDS_IN_MINUTE = 60 * 1000;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_MINUTE * 60 * 24;

function pad(number: number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

export function toShortNotSoISOString(date: Date): string {
  return date.getUTCFullYear() + '-' + pad(date.getUTCMonth() + 1) + '-' + pad(date.getUTCDate());
}

export function toNotSoISOString(date: Date): string {
  return (
    toShortNotSoISOString(date) +
    'T' +
    pad(date.getUTCHours()) +
    ':' +
    pad(date.getUTCMinutes()) +
    ':' +
    pad(date.getUTCSeconds()) +
    '+0000'
  );
}

function startOfDay(date: Date): Date {
  const startDay = new Date(date);
  startDay.setHours(0, 0, 0, 0);
  return startDay;
}

export function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime());
}

export function isSameDay(dateLeft: Date, dateRight: Date): boolean {
  const startDateLeft = startOfDay(dateLeft);
  const startDateRight = startOfDay(dateRight);
  return startDateLeft.getTime() === startDateRight.getTime();
}

export function differenceInDays(dateLeft: Date, dateRight: Date) {
  const startDateLeft = startOfDay(dateLeft);
  const startDateRight = startOfDay(dateRight);
  const timestampLeft =
    startDateLeft.getTime() - startDateLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
  const timestampRight =
    startDateRight.getTime() - startDateRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
