import 'styled-components';
import { theme, ITheme } from './styles/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {};
}