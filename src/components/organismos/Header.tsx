import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <header className="shadow-md border-b px-6 py-4" style={{ background: '#f5b5b5', borderColor: '#f5b5b5' }}>
  <div className="flex items-center justify-between">
        {/* Logo y nombre de la aplicación */}
        <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow" style={{ background: '#8b4646' }}>
          <span className="text-white font-bold text-lg">F</span>
        </div>
          <div>
            <h1 className="text-xl font-bold text-white">Factus</h1>
            <p className="text-sm text-white">Gestión de Facturas</p>
          </div>
        </div>
        {/* Información del usuario y botón de logout */}
        <div className="flex items-center space-x-3" style={{ background: '#8b4646', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <User size={16} className="" style={{ color: '#8b4646' }} />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">Usuario</p>
            <p className="text-xs text-white">Administrador</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center ml-4 px-3 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow"
            title="Cerrar sesión"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
