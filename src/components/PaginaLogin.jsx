import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './PaginaLogin.css';

export default function PaginaLogin({ onLoginSucesso, logo }) {
  console.log('Logo recebida:', logo);
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [logoError, setLogoError] = useState(false);

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return value;
  };

  const isCPF = (value) => {
    const numbersOnly = value.replace(/\D/g, '');
    return numbersOnly.length >= 3;
  };

  const validateCPF = (cpf) => {
    const numbers = cpf.replace(/\D/g, '');
    return numbers.length === 11;
  };

  const validateName = (name) => {
    const words = name.trim().split(' ').filter(word => word.length > 0);
    return words.length >= 2 && name.length >= 3;
  };

  const handleInputChange = (field, value) => {
    let formattedValue = value;
    
    if (field === 'usuario' && isCPF(value)) {
      formattedValue = formatCPF(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
    if (loginError) {
      setLoginError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('HandleSubmit chamado');
    console.log('Dados do form:', formData);
    
    const newErrors = {};
    
    if (!formData.usuario.trim()) {
      newErrors.usuario = 'Usuário é obrigatório';
    }

    if (!formData.senha.trim()) {
      newErrors.senha = 'Senha é obrigatória';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const usuario = formData.usuario.trim();
      const senha = formData.senha.trim();
      
      console.log('Verificando login:', { usuario, senha });
      
      if (usuario === 'admin' && senha === 'admin') {
        console.log('Login bem-sucedido, chamando onLoginSucesso');
        try {
          onLoginSucesso();
        } catch (error) {
          console.error('Erro ao executar onLoginSucesso:', error);
        }
      } else {
        console.log('Credenciais inválidas');
        setLoginError('Usuário ou senha incorretos. Use "admin" para ambos os campos para teste.');
      }
    } else {
      setLoginError('Por favor, corrija os erros acima.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleLogoError = () => {
    console.log('Erro ao carregar logo, usando fallback');
    setLogoError(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          {logo && !logoError ? (
            <img 
              src={logo} 
              alt="Mapa da Dor" 
              className="logo-login"
              onError={handleLogoError}
              onLoad={() => console.log('Logo carregada com sucesso')}
            />
          ) : (
            <div className="logo-placeholder">
              <div className="logo-icon">🏥</div>
              <div className="logo-text">Mapa da Dor</div>
            </div>
          )}
        </div>

        <div className="form-section">
          <div className="form-container">
            <div className={`input-group ${(errors.usuario || loginError) ? 'has-error' : ''}`}>
              <label className="input-label">
                Usuário
              </label>
              <input
                type="text"
                placeholder="Nome Completo ou CPF"
                value={formData.usuario}
                onChange={(e) => handleInputChange('usuario', e.target.value)}
                onKeyDown={handleKeyDown}
                className={`input-field ${(errors.usuario || loginError) ? 'input-error' : ''}`}
                autoComplete="username"
              />
              {errors.usuario && (
                <p className="error-message">
                  {errors.usuario}
                </p>
              )}
            </div>

            <div className={`input-group ${(errors.senha || loginError) ? 'has-error' : ''}`}>
              <label className="input-label">
                Senha
              </label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={(e) => handleInputChange('senha', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`input-field password-input ${(errors.senha || loginError) ? 'input-error' : ''}`}
                  autoComplete="current-password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="password-toggle"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.senha && (
                <p className="error-message">
                  {errors.senha}
                </p>
              )}
            </div>

            {loginError && (
              <div className="login-error-container">
                <p className="login-error-message">
                  {loginError}
                </p>
              </div>
            )}

            <button 
              type="button"
              onClick={handleSubmit}
              className="login-button"
            >
              Login
            </button>

            <div className="signup-links">
              <p className="signup-question">
                Não tem cadastro no Sabará?
              </p>
              <p className="signup-instruction">
                Faça um agora mesmo na recepção
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}