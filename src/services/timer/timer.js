export default class Timer {

    timerslots = [];

    onTimer = () => {
        const currentInstant = new Date().getTime();
        const active = this.timerslots.filter(i => currentInstant > i.setupTime);
        if (active.length === 0) {
            return;
        }
        this.timerslots.filter(i => currentInstant > i.setupTime).forEach((item) => {
            item.timerEvent(item.params);
        });
        this.timerslots = this.timerslots.filter(i => currentInstant < i.setupTime);
    };


    init(timeout) {
        this.interval = setInterval(() => this.onTimer(), timeout);
        return this;
    }

    shutdown() {
        clearInterval(this.interval);
    }

    startTimer = (
        timerEvent,
        interval = 1000,
        params = {}) => {

        const setupTime = new Date().getTime() + interval;
        this.timerslots.push({
            setupTime: setupTime,
            timerEvent: timerEvent,
            params: params
        });

    }

}
