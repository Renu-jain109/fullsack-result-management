import { Pipe, PipeTransform } from '@angular/core';

/**
 * Custom pipe to check if the first letter of a string is capitalized
 * Returns 'First Letter Capital' if not capitalized, otherwise returns the original value
 */
@Pipe({
  name: 'letter',
  standalone: true
})
export class LetterPipe implements PipeTransform {

  /**
   * Transforms the input value based on its first letter's case
   * @param value - The input string to check
   * @returns Original value or message about first letter case
   */
  transform(value: any): any {
    // Return as is if not a string
    if (typeof value !== 'string') {
      return value;
    }

    const firstLetter = value.charAt(0);
    // Check if first letter is not uppercase
    if (firstLetter !== firstLetter.toUpperCase()) {
      return 'First Letter Capital';
    }

    // Return original value if first letter is already capitalized
    return value;
  }
}
