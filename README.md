# An NPM library to help with react async testing

```bash
npm install — save @isthatcentered/tickable@beta
```

```typescript jsx

describe( `No results found`, () => {
	beforeEach( () => {
		mock.mockImplementation( () =>
			Tickable( response ) )  // Tickable returns a Promise that will resolve on process.nextTick
	} )
	
	test( `Displays a message`, async () => {
		const wrapper = mount( <App/> )
		
		// At this point, nextTick hasn't happened so Promise is still unresolved
		
		await tick() // Force our Tickable promise resolve
		
		// Now we can test expectations depending on our promise resolve
		expect( wrapper ).toHaveText( /nothing found/i )
	} )
} )
```
