# Reactbootcamp 
These are my personal notes about the [React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14375952#overview)

¡¡¡¡¡

## Reac lifecycles
### componentDidMount
```
componentDidMount() {
    //code here
}
```
Runs once after constructor & render methods
Like ngOnInit() on AngularA
Always fetch data on this lifecycle instead of the constructor

### componentDidUpdate
```
componentDidUpdate() {
    //code here
}
```
Runs when state is changed or the propertias are changed
or you call forceUpdate()
Inside of componentDidUpdate we have the previous and the current state
and props. Liek this:

```
componentDidUpdate(prevProps, prevState) {
    // code here
}
```

### componentWillUnmount
```
componentWillUnmount() {
    // code here
}
```
Used for clear data
it's like the ngOnDestroy in Angular
