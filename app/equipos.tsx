import { Link } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';

const equipos = [
  { id: '1', nombre: 'Impresora 3D', estado: 'Operativo' },
  { id: '2', nombre: 'Notebook laboratorio', estado: 'Mantenimiento' },
  { id: '3', nombre: 'Router principal', estado: 'Operativo' },
];

export default function Equipos() {
  return (
    <FlatList
      className="flex-1 bg-slate-100"
      contentContainerClassName="p-5"
      data={equipos}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text className="mb-4 text-xl font-bold text-slate-900">
          Equipos registrados
        </Text>
      }
      renderItem={({ item }) => (
        <Link href={'/equipos/' + item.id} asChild>
          <Pressable className="mb-3 rounded-2xl bg-white p-5">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-bold text-slate-900">
                {item.nombre}
              </Text>

              <Text
                className={
                  item.estado === 'Operativo'
                    ? 'text-emerald-700'
                    : 'text-amber-700'
                }>
                {item.estado}
              </Text>
            </View>

            <Text className="mt-2 text-sm text-slate-500">
              Tocá para ver el detalle
            </Text>
          </Pressable>
        </Link>
      )}
    />
  );
}