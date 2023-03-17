App = {
    contracts: {},

    load: async () => {
        App.setLoading(true)

        await App.loadAccount()
        await App.loadContract()
        App.renderAccount()
        await App.renderCount()

        App.setLoading(false)
    },

    loadAccount: async () => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        App.account = accounts[0];
    },

    loadContract: async () => {
        const counter = await $.getJSON('Counter.json')
        App.contracts.Counter = TruffleContract(counter)
        App.contracts.Counter.setProvider(ethereum)

        App.counter = await App.contracts.Counter.deployed()
    },

    setLoading: (boolean) => {
        const loader = $('#loader')
        const content = $('#content')
        if (boolean) {
            loader.show()
            content.hide()
        } else {
            loader.hide()
            content.show()
        }
    },

    renderAccount: () => {
        $('#account').addClass('notification my-6');
        $('#account').html(`Connected to account with the address <strong>${App.account}</strong>`)
    },

    renderCount: async () => {
        const count = (await App.counter.count()).toNumber()
        $('#count').html(count)
    },

    increment: async () => {
        console.log("increment!!!")
        await App.counter.increment({from: App.account})
        await App.renderCount() 
    },

    decrement: async () => {
        console.log("decrement!!!")
        await App.counter.decrement({from: App.account})
        await App.renderCount()
    }
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})
