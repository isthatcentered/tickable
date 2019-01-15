export function tick(): Promise<undefined>
{
	return new Promise( resolve => process.nextTick( () => resolve() ) )
}


export function Tickable<T>( data?: T ): Promise<T>
{
	return new Promise( ( resolve ) => {
		process.nextTick( () => resolve( data ) )
	} )
}

