import { Text, View } from 'react-native';

export default function NuevaTarea() {
  return (
    <View className="flex-1 bg-slate-100 p-6">
      <Text className="text-2xl font-bold text-slate-900">
        Nueva tarea
      </Text>

      <Text className="mt-3 text-base text-slate-600">
        Desde esta pantalla se registrará una nueva tarea de mantenimiento.
      </Text>

      <View className="mt-6 rounded-2xl bg-white p-5">
        <Text className="text-base font-semibold text-slate-900">
          Formulario pendiente
        </Text>

        <Text className="mt-2 text-sm text-slate-500">
          En una próxima práctica podemos agregar los campos del formulario.
        </Text>
      </View>
    </View>
  );
}