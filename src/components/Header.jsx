// Component header
function Header() {
    return <nav>
			<ul className="row p-0 align-items-center col-gap-1">
				<li className="col-md-1 col-12 p-0">
					<a href="">
						<img src="https://s3-alpha-sig.figma.com/img/0fc4/c1bd/682eccf8d6c5e3ed3e5df02dab272608?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZxZixsMm-1cU3kGpCacgo35lEkAqP7E~5myULZbUrLlOpgTpWKEPJ9Q1DQYTYKMdRfbwrPeBU1QW3VcPtXVw-QcVhOusF3Ju9vNATvHkBeT~f2SPxMt8JFDHYD791GpT9p6tZef39-Lj5ax6lNVWoIIkz3LFoIto2ocOvy7WC9FH9wkv1esDixrtvRmVGha0w2n9GQ31jfEMePER1dF2n-JhRRyoGrIAzyyp8qj0pRyYLLA30TR6rCCP23DYDMsOY3E~VrqFxMicVpI~6OXiGTY73~uAf6QIroaXt1vlXAaOg3Zm0myZI6Tq3WXFx4GdrI~mdw4wOyaex38T7BROkQ__" className="logo-brand" alt="" />
					</a>
				</li>
				<li className="col-7 p-0">
					<div className="input-group search-bar">
						<span className="input-group-text bg-white">
							<img src="https://s3-alpha-sig.figma.com/img/bb50/959f/71ce6b3c94884bf4eb034d18e6c5f3eb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MS6TFUBKBb8PNI0aTkBI3fleIBx6bGidcH1btJWbJY11o7CuFbCincQsvBG6OVK2fgSdNObONryJgGlQl1-31S0Okin5isOM-~NOBKigfezvrnE6d2BwrIoTky4BVElymEHuyWS3312Xckd3gx1WmMNL8oNkjTcZ1eOuE~SOv87BGiqHTwWv3Etf9LidhmHO81d9C3cRlLy2Zu2IZC5iW7D2lxB~MLezmCX2VTYZSna0K4fcmysvhG~vl4UNCkT6wogmVzc~WGIYtlhk56ZTnOfL53sHat0tzQC2Gw4ADx9acZXFMiwNvQjGva3XPx66e~xq45NDfPTyfUGhLZ8VGQ__" className="icon-search-bar" alt="" />
						</span>
						<input type="text" className="form-control border-start-0" placeholder="Freeship đến 30K"/>
						<span className="input-group-text bg-white text-primary">Tìm kiếm</span>
					</div>
				</li>
				<li className="col-3 d-flex justify-content-center gap-4 pe-0 border-end border-1">
					<a href="" className="d-flex text-decoration-none gap-1">
						<img src="https://s3-alpha-sig.figma.com/img/428e/3a18/014835c48fc3848c37a8147a0b848e40?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdh4XWS5FPrF73tKBc1MEjo4HMNhjyYrcWWpgPcgdNvBs~PeciQRU2eTI7tb3pBVf2C3KnxH6YSPTpbHCfWiylwLDXnmuvoFaJPw7~P0aKIdMAy-Gh7eYQ3PpsUZIi1fKgyCEyJTWq9e4khEitPfMPGdHVkPg7RSiC3sBPBXjoVGktBZFo~knMAU6NGjXL-OgJiiSQJ1qx718vlQGn-7RsH1NsrjSLFjeC0sEN3XQ9XqD3956afPerZs3Y-~J5CfoLw4w7smeIcl45U4sy1vKucf3lYf3Qt8wILBbestbEuMX3RsSViXj1sQ3KDlesMGaibEbKdCNokIs5MJXyGW3w__" className="home-icon" alt="" />
						<p className="text-secondary m-0">Trang chủ</p>
					</a>
					<a href="" className="d-flex text-decoration-none gap-1">
						<img src="https://s3-alpha-sig.figma.com/img/4b75/ae06/c1ed80deda31d49b91763474ad6f4e8b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZPQ3OfD89YesXcDaJwKXq8hF6gN4OhfId7N~EfnhkG0gOhbBhB17YNIZnXHOqOuFa8VV0EcasTjiZI9PSi2~btPZtM7AeDhR2EUEwXRRBa7y7e01RKnyxa1yG-15GoKyBajbCVomTPa51fVf66A5srJpmwf9I4GZo675kYZ50Jlkrp7U7fY1y3aPO7L~rra2T9PoGDaUVUYDFGshzsfw9C8t7Gd~aYZdxtyqw1vIcCSzitZJvbbB3RtxJFW5DGTPtTXt~KcnqlYIaMi5NtgTpHy46wg8Ab~kbIoZNZ-aBvBCKmj94WSN7ec1~D0m4XhqYIZqNp-E88L80642WLd7A__" className="account-icon" alt="" />
						<p className="text-secondary m-0">Tài khoản</p>
					</a>
				</li>
				<li className="col-1">
					<a href="" className="cart d-flex justify-content-end p-0 position-relative ps-1 mt-1">
						<img src="https://s3-alpha-sig.figma.com/img/a084/d2e6/defd412e1477724456bfb6c09607f2de?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jRTTNh9X20kgBOF1qA54nSKiAALKDcG530vVH7NNnLvNqXdzF638CHb7gs7~Kd6w-yVlG4WDcFowkBgmidI7mGMTxIlIJNhWWV23660ieemEZRCe48bS7ws4B88KmpABapIYwCj5~aPLXhDTLdzaYo9vCRmfrkxENfUhUyxDVA2r8kusjsc4hO~67V-auagoqP~EXGSqZXYWVxzhN6y-xXV~nX6Y3UHeQyaTCNs3l0BAP0EShQZA9pAlL8E0-~zPcxl6eMgl1k-YCKVbRXsGDnpqa1nOOrcmm9DOf6oU6AWD8clLWkLNgp8kadyv7Z9op0aWsZc3YyHkUJwpvDuOgQ__" className="cart-icon position-relative" alt="" />
						<p className="bg-danger position-relative rounded-circle fs-10px d-flex justify-content-center align-item-center text-white m-0">0</p>
					</a>
				</li>
			</ul>
    </nav>
}

export default Header