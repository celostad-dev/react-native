# curso-reactive-native

Dicas
# Praticando Flex e Alinhamentos

- Vamos usar na prop justifyContent o space-between ( Fazer com tenha espaço iguais entre eles ):

          <View style={‌{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={‌{width: 50, height: 50, backgroundColor: 'green'}} />
            <View style={‌{width: 50, height: 50, backgroundColor: 'blue'}} />
            <View style={‌{width: 50, height: 50, backgroundColor: 'red'}} />
          </View>


- Vamos usar agora na prop justifyContent o space-around ( Fazer com tenha espaços iguais entre eles mas tambem ao redor ):

          <View style={‌{flex: 1, flexDirection: 'row',  justifyContent:'space-around'}}>
            <View style={‌{width: 50, height: 50, backgroundColor: 'green'}} />
            <View style={‌{width: 50, height: 50, backgroundColor: 'blue'}} />
            <View style={‌{width: 50, height: 50, backgroundColor: 'red'}} />
          </View>


- Vamos agora usar uma prop nova dentro do alignItems o stretch ( Para essa prop funcionar as views filhas não podem ter largura FIXA ) Vamos lá:

        <View style={‌{flex: 1, flexDirection: 'column', alignItems:'stretch'}}>
            <View style={‌{width: 100, height: 50, backgroundColor: 'green'}} />
            <View style={‌{ height: 50, backgroundColor: 'blue'}} />
            <View style={‌{ height: 50, backgroundColor: 'red'}} />
          </View>


- Agora vamos continuar nossos estudos, aprendendo mais.