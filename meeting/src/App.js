import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, FlatList } from 'react-native-web';

const App = () => {
  // Estados para armazenar dados
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    endereco: '',
    contato: '',
    categoria: '',
    imagem: null
  });
  const [fornecedores, setFornecedores] = useState([]);

  // Função para lidar com a submissão do formulário
  const cadastrarFornecedor = () => {
    setFornecedores([...fornecedores, fornecedor]);
    setFornecedor({ nome: '', endereco: '', contato: '', categoria: '', imagem: null });
  };

  // Função para capturar o arquivo de imagem
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFornecedor({ ...fornecedor, imagem: imageUrl });
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Cadastro de Fornecedores</Text>
      
      {/* Cadastro de Fornecedores */}
      <View>
        <Text>Nome do Fornecedor:</Text>
        <TextInput 
          value={fornecedor.nome}
          onChangeText={(text) => setFornecedor({ ...fornecedor, nome: text })}
          placeholder="Nome"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />

        <Text>Endereço:</Text>
        <TextInput 
          value={fornecedor.endereco}
          onChangeText={(text) => setFornecedor({ ...fornecedor, endereco: text })}
          placeholder="Endereço"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />

        <Text>Contato:</Text>
        <TextInput 
          value={fornecedor.contato}
          onChangeText={(text) => setFornecedor({ ...fornecedor, contato: text })}
          placeholder="Contato"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />

        <Text>Categoria do Produto:</Text>
        <TextInput 
          value={fornecedor.categoria}
          onChangeText={(text) => setFornecedor({ ...fornecedor, categoria: text })}
          placeholder="Categoria do Produto"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />

        <Text>Imagem do Fornecedor:</Text>
        {/* Componente de Upload de Imagem */}
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          style={{ marginBottom: 20 }}
        />

        {fornecedor.imagem && (
          <Image source={{ uri: fornecedor.imagem }} style={{ width: 150, height: 150, marginTop: 10 }} />
        )}

        <Button title="Cadastrar Fornecedor" onPress={cadastrarFornecedor} />
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Lista de Fornecedores</Text>

        {/* Listagem de Fornecedores */}
        <FlatList 
          data={fornecedores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 18 }}>{item.nome}</Text>
              <Text>Endereço: {item.endereco}</Text>
              <Text>Contato: {item.contato}</Text>
              <Text>Categoria: {item.categoria}</Text>
              {item.imagem && (
                <Image source={{ uri: item.imagem }} style={{ width: 50, height: 50 }} />
              )}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default App;
