import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
})
export class ViewCartComponent implements OnInit {
  constructor(private cart: CartService) {}

  // storeCart: any = {
  //   fName: '',
  //   price: '',
  //   cusines: {
  //     cName: '',
  //   },
  // };

  // addPrice = null;

  public totalItem: number = 0;
  public product: any;
  public grandTotal !: number;

  ngOnInit(): void {
    //using local storage
    // this.storeCart = JSON.parse(localStorage.getItem('cart') || '{}');
    // console.log(this.storeCart);
    this.cart.getCart().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cart.getTotalPrice();

      this.totalItem = res.length; //sets the total item in the cart

    });
  }

  removeItem(f: any) {
    this.cart.removeCartItem(f);
  }

  emptyCart() {
    this.cart.removeAllCart();
  }

  checkout() {
    if(this.totalItem != 0) {
      Swal.fire({
        title: 'Confirm your payment?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`You order of amount ${this.grandTotal} is succesfully placed !`, '', 'success').then(function() {
            window.location.href="/user/"
          });
        } else if (result.isDenied) {
          Swal.fire('Your order is not placed', '', 'info')
        }
      })
    }
    else {
      Swal.fire( {
        title: 'Nothing to order',
        text: 'Nothing to order',
        icon: 'info',
        confirmButtonText: 'Cool',
        timer: 10000,
      }
      )
    }
    
  }

  // getTotal(): number{
  //   for(let i=0; i=this.storeCart.length; i++ ) {
  //     this.addPrice += this.storeCart[i].price;
  //    }
  //  console.log(this.addPrice);
  //   return Number(this.addPrice);
  // }
}
