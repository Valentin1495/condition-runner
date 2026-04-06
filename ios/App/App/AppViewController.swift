import Capacitor
import UIKit

class AppViewController: CAPBridgeViewController {
    private let splashColor = UIColor(
        red: 5.0 / 255.0,
        green: 8.0 / 255.0,
        blue: 27.0 / 255.0,
        alpha: 1
    )

    override func capacitorDidLoad() {
        super.capacitorDidLoad()

        view.backgroundColor = splashColor
        webView?.backgroundColor = splashColor
        webView?.scrollView.backgroundColor = splashColor
        webView?.isOpaque = false
    }
}
