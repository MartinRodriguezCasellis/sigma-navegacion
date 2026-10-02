import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const equipos: Record<string, { nombre: string; estado: string }> = {
  '1': { nombre: 'Impresora 3D', estado: 'Operativo' },
  '2': { nombre: 'Notebook laboratorio', estado: 'Mantenimiento' },
  '3': { nombre: 'Router principal', estado: 'Operativo' },
};

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const equipo = equipos[id];

  if (!equipo) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-100 p-6">
        <Text className="text-lg text-slate-900">Equipo no encontrado.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-100 p-6">
      <Text className="text-sm font-semibold uppercase text-teal-700">
        Equipo {id}
      </Text>

      <Text className="mt-2 text-3xl font-bold text-slate-900">
        {equipo.nombre}
      </Text>

      <View className="mt-6 rounded-2xl bg-white p-5">
        <Text className="text-base font-bold text-slate-900">
          Estado general
        </Text>

        <Text
          className={
            equipo.estado === 'Operativo'
              ? 'mt-2 text-base text-emerald-700'
              : 'mt-2 text-base text-amber-700'
          }>
          {equipo.estado}
        </Text>
      </View>
    </View>
  );
}