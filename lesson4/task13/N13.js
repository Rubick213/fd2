//1
function ObjStorageFunc() {
    let self = this

    self.addVAlue = function(key,value) {
        self[key] = value
    }
    self.getValue = function(key) {
        return self[key]
    }
    self.deleteVAlue = function(key) {
        if (key in self) {
            delete self[key]
            return true
        } else {
            return false
        }
    }
    self.getKeys = function() {
        return Object.keys(self)
    }
}

let StorageFunc = new ObjStorageFunc()

StorageFunc.addVAlue('model','lexus') //сохраняет указанное значение под указанным ключом; если уже есть перезаписывает
console.log(StorageFunc.getValue('model')) //возвращает значение по указанному ключу либо undefined;
console.log(StorageFunc.deleteVAlue('model')) //удаляет значение с указанным ключом, возвращает true или false
console.log(StorageFunc.getKeys()); //возвращает массив, состоящий из одних ключей.

console.log(StorageFunc);
//2
// let Alko = new ObjStorageFunc()
