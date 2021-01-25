import React from 'react';
import { Code } from '@chakra-ui/react';

export interface HelloWorldProps {
  /**
   * What code to display
   */
  code?: string;
  /**
   * What background color to use
   */
  color?: string;
}

/**
 * Primary UI component for displaying code snippets.
 */
export const HelloWorld: React.FC<HelloWorldProps> = ({ code, color }) => {
  return (
    <Code colorScheme={color || 'blue'}>{code || <>console.log(&apos;hello world&apos;)</>}</Code>
  );
};
