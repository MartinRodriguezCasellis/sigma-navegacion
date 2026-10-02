import { Text, View } from 'react-native';

const tareas = [
  'Revisar bomba de agua',
  'Cambiar filtro de aire',
  'Controlar router principal',
];

export default function Tareas() {
  return (
    <View className="flex-1 bg-slate-100 p-6">
      <Text className="text-2xl font-bold text-slate-900">
        Tareas pendientes
      </Text>

      {tareas.map((tarea) => (
        <View key={tarea} className="mt-4 rounded-2xl bg-white p-5">
          <Text className="text-base font-semibold text-slate-900">
            {tarea}
          </Text>
        </View>
      ))}
    </View>
  );
}