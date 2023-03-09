function startlog(){
    let log1 = document.getElementById('email').value + document.getElementById('password').value;
    let log2 = ('beli1@gmail.com') + ('beli1123');
    let log3 = ('beli2@gmail.com') + ('beli2123');
    let log4 = ('jual1@gmail.com') + ('jual1123');
    let log5 = ('jual2@gmail.com') + ('jual2123');

    if (log1 == log2) {
    let logakses = document.getElementById('akses').innerHTML = 'login sukses';
    }
    else if (log1 == log3) {
        let logakses = document.getElementById('akses').innerHTML = 'login sukses';
    }
    else if (log1 == log4) {
    let logakses = document.getElementById('akses').innerHTML = 'login sukses';
    }
    else if (log1 == log5) {
    let logakses = document.getElementById('akses').innerHTML = 'login sukses';
        }
    else {
    let logakses = document.getElementById('akses').innerHTML = 'gagal login';
    }
    };
