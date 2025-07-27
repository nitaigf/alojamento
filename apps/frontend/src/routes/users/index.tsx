// routes/users/index.tsx
import { component$, useResource$, Resource } from "@builder.io/qwik";
import { listUsers } from "~/features/users/services/user.service";
import { useAuthGuard } from "~/lib/hooks/useAuthGuard";
import { useAuth } from "~/stores/auth";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  useAuthGuard();

  const { clearUser } = useAuth();

  const nav = useNavigate();
  const users = useResource$(() => listUsers());

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Usuários</h1>
      <button onClick$={() => { clearUser(); nav("/"); }} class="bg-red-500 text-white p-2 rounded mb-4">
        Logout
      </button>
      
      <Resource
        value={users}
        onPending={() => <div>Carregando usuários...</div>}
        onRejected={(error) => <div>Erro ao carregar usuários: {error.message}</div>}
        onResolved={(userList) => (
          <ul class="space-y-2">
            {userList.map((u: any) => (
              <li class="border p-2 rounded shadow" key={u._id}>
                {u.name} ({u.email})
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
});