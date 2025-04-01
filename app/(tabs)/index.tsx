import { Text, View } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';


export default function HomeScreen() {
  return (
    <>
      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          This App Build With Love ❤️
        </Heading>
        <Text className='text-gray-500'>
          Aplikasi Nonton TV Gratis
        </Text>
      </Card>
      <VStack className="space-y-2 m-3 gap-2">
        <Box className="bg-red-500 h-32" />
        <Box className="bg-green-500 h-32" />
        <Box className="bg-blue-500 h-32" />
        <Box className="bg-yellow-500 h-32" />
        <Box className="bg-purple-500 h-32" />
      </VStack>
    </>
  );
}