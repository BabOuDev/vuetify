export type XYZ = [number, number, number];
export type LAB = [number, number, number];
export type HSV = { h: number; s: number; v: number; a?: number };
export type RGB = { r: number; g: number; b: number; a?: number };
export type HSL = { h: number; s: number; l: number; a?: number };
export type Hex = string & { __hexBrand: never };
export type Color = string | number | HSV | RGB | HSL;

export function isCssColor(color?: string | null | false): boolean;
export function isParsableColor(color: string): boolean;
export function parseColor(color: Color): RGB;
export function RGBToInt(color: RGB): number;
export function classToHex(
  color: string,
  colors: Record<string, Record<string, string>>,
  currentTheme: Record<string, any>,
): string;
export function HSVtoRGB(hsva: HSV): RGB;
export function HSLtoRGB(hsla: HSL): RGB;
export function RGBtoHSV(rgba: RGB): HSV;
export function HSVtoHSL(hsva: HSV): HSL;
export function HSLtoHSV(hsl: HSL): HSV;
export function RGBtoCSS({ r, g, b, a }: RGB): string;
export function HSVtoCSS(hsva: HSV): string;
export function RGBtoHex({ r, g, b, a }: RGB): Hex;
export function HexToRGB(hex: Hex): RGB;
export function HexToHSV(hex: Hex): HSV;
export function HSVtoHex(hsva: HSV): Hex;
export function parseHex(hex: string): Hex;
export function parseGradient(
  gradient: string,
  colors: Record<string, Record<string, string>>,
  currentTheme: Record<string, any>,
): string;
export function lighten(value: RGB, amount: number): RGB;
export function darken(value: RGB, amount: number): RGB;
export function getLuma(color: Color): number;
export function getContrast(first: Color, second: Color): number;
export function getForeground(color: Color): "#fff" | "#000";
