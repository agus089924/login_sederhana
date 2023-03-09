function startlog(){
    let net1 = document.getElementById('email').value + document.getElementById('password').value;
    let net2 = ('beli1@gmail.com') + ('beli1123');
    let net3 = ('beli2@gmail.com') + ('beli2123');
    let net4 = ('jual1@gmail.com') + ('jual1123');
    let net5 = ('jual2@gmail.com') + ('jual2123');

    if (net1 == net2) {
    let logakses = document.getElementById('akses').innerHTML = 'login sukses';
    }
    else if (net1 == net3) {
        let logakses = document.getElementById('akses').innerHTML = 'login sukses';
    }
    else if (net1 == net4) {
    let logakses = document.getElementById('akses').innerHTML = 'login sukses';
    }
    else if (net1 == net5) {
    let logakses = document.getElementById('akses').innerHTML = 'login sukses';
        }
    else {
    let logakses = document.getElementById('akses').innerHTML = 'gagal login';
    }
    };
