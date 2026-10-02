import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View className="flex-1 bg-slate-100 p-6">
      <View className="rounded-2xl bg-slate-950 p-6">
        <Text className="text-3xl font-bold text-white">SIGMA</Text>
        <Text className="mt-2 text-base text-slate-300">
          Sistema de gestión de mantenimiento
        </Text>
      </View>

      <Text className="mt-8 text-xl font-bold text-slate-900">
        Panel principal
      </Text>

      <Text className="mt-2 text-base text-slate-600">
        Elegí una opción para continuar.
      </Text>

      <Link href="/equipos" asChild>
        <Pressable className="mt-6 items-center rounded-xl bg-teal-700 px-5 py-4">
          <Text className="text-base font-bold text-white">Equipos</Text>
        </Pressable>
      </Link>

      <Link href="/tareas" asChild>
        <Pressable className="mt-4 items-center rounded-xl bg-slate-800 px-5 py-4">
          <Text className="text-base font-bold text-white">Tareas</Text>
        </Pressable>
      </Link>

      <Link href="/nueva-tarea" asChild>
        <Pressable className="mt-4 items-center rounded-xl bg-amber-500 px-5 py-4">
          <Text className="text-base font-bold text-slate-950">
            Nueva tarea
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}